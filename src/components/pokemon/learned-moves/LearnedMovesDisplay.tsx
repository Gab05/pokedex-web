import React from 'react'
import { Move } from '../../../models/move/Move'
import { LevelUpMove } from '../../../models/pokemon/learned-moves/LevelUpMove'
import { TmMove } from '../../../models/pokemon/learned-moves/TmMove'
import { MoveService } from '../../../services/move/MoveService'
import { MoveFilter } from '../../../services/move/requests/MoveFilter'
import { MovesRequest } from '../../../services/move/requests/MovesRequest'
import ServiceContainer from '../../../services/ServiceContainer'
import { LoadingSpinner } from '../../LoadingSpinner'
import { EggMovesDisplay } from './egg/EggMovesDisplay'
import { LevelupMovesDisplay } from './levelUp/LevelupMovesDisplay'
import { TmMovesDisplay } from './tm/TmMovesDisplay'

interface LearnedMovesDisplayProps {
  eggMovesLearned: string[]
  tmMovesLearned: TmMove[]
  levelupMovesLearned: LevelUpMove[]
}

interface LearnedMovesDisplayState {
  eggMoves?: Move[]
  tmMoves?: Move[]
  levelupMoves?: Move[]
}

export class LearnedMovesDisplay extends React.Component<LearnedMovesDisplayProps, LearnedMovesDisplayState> {

  private moveService: MoveService = ServiceContainer.get(MoveService)

  constructor(props: any) {
    super(props)

    this.state = {}
  }

  componentDidUpdate = (): void => {
    if (this.props.eggMovesLearned && !this.state.eggMoves) this.fetchEggMoves()
    if (this.props.tmMovesLearned && !this.state.tmMoves) this.fetchTmMoves()
    if (this.props.levelupMovesLearned && !this.state.levelupMoves) this.fetchLevelupMoves()
  }

  render() {
    return (
      <div className='container'>
        <div>
          {this.state.levelupMoves ? <LevelupMovesDisplay moveMap={this.mapLevelupMoves()}/> : <LoadingSpinner/>}
        </div>
        <div>
          {this.state.tmMoves ? <TmMovesDisplay moveMap={this.mapTmMoves()} />: <LoadingSpinner/>}
        </div>
        <div>
          {this.state.eggMoves ? <EggMovesDisplay moveList={this.state.eggMoves}/> : <LoadingSpinner/>}
        </div>
      </div>
    )
  }

  private fetchEggMoves = (): void => {
    const filter: MoveFilter = { names: this.props.eggMovesLearned }
    const request: MovesRequest = { filter }

    this.moveService.fetchMoves(request)
      .then((moves: Move[]) => {
        this.setState((previous: LearnedMovesDisplayState) =>
          ({ ...previous, eggMoves: moves }))
      })
  }

  private fetchTmMoves = (): void => {
    const filter: MoveFilter = {
      names: this.props.tmMovesLearned.map((tm) => tm.move),
    }
    const request: MovesRequest = { filter }

    this.moveService.fetchMoves(request)
      .then((moves: Move[]) => {
        this.setState((previous: LearnedMovesDisplayState) =>
          ({ ...previous, tmMoves: moves }))
      })
  }

  private fetchLevelupMoves = (): void => {
    const filter: MoveFilter = {
      names: this.props.levelupMovesLearned.map((levelUpMove) => levelUpMove.move),
    }
    const request: MovesRequest = { filter }

    this.moveService.fetchMoves(request)
      .then((moves: Move[]) => {
        this.setState((previous: LearnedMovesDisplayState) =>
          ({ ...previous, levelupMoves: moves }))
      })
  }

  private mapLevelupMoves = (): Map<string, Move> => {
    const moveMap = new Map<string, Move>()
    this.props.levelupMovesLearned.map((levelupLearned: LevelUpMove) =>
      // @ts-ignore
      moveMap.set(levelupLearned.level, this.state.levelupMoves!
        .find((move: Move) => move.name === levelupLearned.move)
      )
    )
    return moveMap
  }

  private mapTmMoves = (): Map<string, Move> => {
    const moveMap = new Map<string, Move>()
    this.props.tmMovesLearned.map((tmLearned: TmMove) =>
      // @ts-ignore
      moveMap.set(tmLearned.tm, this.state.tmMoves!
        .find((move: Move) => move.name === tmLearned.move)
      )
    )
    console.log('Passed tm moves:', moveMap)
    return moveMap
  }
}
