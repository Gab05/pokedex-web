import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { RouteProps } from 'react-router'
import { Pokemon } from '../../models/pokemon/Pokemon'
import { PokemonFactory } from '../../factories/PokemonFactory'
import { PokemonNameBeautifier } from '../../services/name-beautifiers/PokemonNameBeautifier'
import { PokemonService } from '../../services/pokemon/PokemonService'
import { TypesDisplay } from '../type/TypesDisplay'
import { AbilitiesDisplay } from './abilities/AbilitiesDisplay'
import { CaptureRateDisplay } from './basic/CaptureRateDisplay'
import { GenderRatioDisplay } from './basic/GenderRatioDisplay'
import { WeightDisplay } from './basic/WeightDisplay'
import { LearnedMovesDisplay } from './learned-moves/LearnedMovesDisplay'
import { PokemonSprites } from './PokemonSprites'
import { PokemonTitle } from './title/PokemonTitle'
import { StatsDisplay } from './stats/StatsDisplay'
import './PokemonDisplay.css'

interface PokemonDisplayState {
  name: string
  pokemon: Pokemon
}

export class PokemonDisplay extends React.Component<any & RouteProps, PokemonDisplayState> {

  private readonly pokemonService = ServiceContainer.get(PokemonService)
  private readonly pokemonFactory = ServiceContainer.get(PokemonFactory)
  private readonly pokemonNameBeautifier = ServiceContainer.get(PokemonNameBeautifier)

  constructor(props: any) {
    super(props)

    this.state = {
      name: this.props.match.params.name,
      pokemon: this.pokemonFactory.createBlankPokemon(),
    }
  }

  componentDidMount(): void {
    this.pokemonService.fetchPokemonByName(this.state.name).then((fetchedPokemon) => {
      this.setState(() => ({
        pokemon: fetchedPokemon,
      }))
    })
  }

  render() {
    return (
      <div className='pokemon_display is-mobile'>
        <PokemonTitle
          name={this.state.name}
          beautifiedName={this.pokemonNameBeautifier.beautifyName(this.state.name)}
          nationalNumber={this.state.pokemon.nationalNumber}
        />
        <div className='display__body container'>
          <div className='tile is-ancestor is-vertical'>
            <div className='tile is-12'>
              <div className='tile'>
                <div className='tile is-vertical is-4'>
                  <div className='tile'>
                    <PokemonSprites name={this.state.name} />
                  </div>
                  <div className='tile level is-mobile'>
                    <div className='tile is-parent'>
                      <article className='tile is-child notification is-info'>
                        <p className='display__name type-title'>TYPE</p>
                        <TypesDisplay types={this.state.pokemon.typing}/>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child notification is-info'>
                        <p className='display__name weight-title'>WEIGHT</p>
                        <WeightDisplay weight={this.state.pokemon.weight}/>
                      </article>
                    </div>
                  </div>
                </div>
                <div className='tile is-parent is-5'>
                  <article className='tile is-child notification is-info'>
                    <p className='subtitle display__name'>BASE STATS</p>
                    <StatsDisplay stats={this.state.pokemon.baseStats}/>
                  </article>
                </div>
                <div className='tile is-parent is-3'>
                  <article className='tile is-child notification is-info'>
                    <div className='content'>
                      <p className='display__name'>CAPTURE RATE</p>
                      <CaptureRateDisplay captureRate={this.state.pokemon.captureRate}/>
                      <p className='display__name'>GENDER RATIO</p>
                      <GenderRatioDisplay genderRatio={this.state.pokemon.genderRatio}/>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className='tile is-12'>
              <div className='tile is-4'>
                <div className='tile is-parent is-12'>
                  <article className='tile is-child notification is-dark'>
                    <p className='subtitle display__name'>ABILITIES</p>
                    <AbilitiesDisplay
                      firstName={this.state.pokemon.abilities.first}
                      secondName={this.state.pokemon.abilities.second}
                      hiddenName={this.state.pokemon.abilities.hidden}
                    />
                  </article>
                </div>
              </div>
              <div className='tile is-8'>
                <div className='tile is-parent is-12'>
                  <article className='tile is-child notification is-dark'>
                    <p className='subtitle display__name'>MOVES</p>
                    <LearnedMovesDisplay
                      eggMovesLearned={this.state.pokemon.eggMoves}
                      tmMovesLearned={this.state.pokemon.tmMoves}
                      levelupMovesLearned={this.state.pokemon.levelUpMoves}
                    />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
