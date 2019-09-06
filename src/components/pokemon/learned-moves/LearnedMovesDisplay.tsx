import React from 'react'
import { Move } from '../../../models/move/Move'
import { LevelUpMove } from '../../../models/pokemon/learned-moves/LevelUpMove'
import { TmMove } from '../../../models/pokemon/learned-moves/TmMove'
import { MoveService } from '../../../services/move/MoveService'
import { MoveFilter } from '../../../services/move/requests/MoveFilter'
import { MovesRequest } from '../../../services/move/requests/MovesRequest'
import ServiceContainer from '../../../services/ServiceContainer'
import { LoadingSpinner } from '../../LoadingSpinner'

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
      <div>
        <div>{this.state.eggMoves ? this.displayEggMoves() : <LoadingSpinner/>}</div>
        <div>{this.state.tmMoves ? this.state.tmMoves.toString(): <LoadingSpinner/>}</div>
        <div>{this.state.levelupMoves ? this.state.levelupMoves.toString() : <LoadingSpinner/>}</div>
      </div>
    )
  }

  private displayEggMoves = (): JSX.Element[] => {
    const elements: JSX.Element[] = []
    if (this.state.eggMoves) this.state.eggMoves.map((move: Move) => elements.push(
      <div>{move.name}</div>
    ))
    return elements
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
}
