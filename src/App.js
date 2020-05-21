import React, { Component } from 'react'
import axios from 'axios'

// GLOBAL STYLE
import {GlobalStyle} from './global-style'

// COMPONENTS
import Container from './components/Container'
import Footer from './components/Footer'

const initialReposState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}


export default class App extends Component {
  constructor () {
    super()

    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false,
      emptyLabel: false
    }

    this.perPage = 10

    // this.handleSearch = this.handleSearch.bind(this);
  }

  async HandleSearch (e) {
    try {
        const value = document.querySelector('.inputValue').value

        // USO OS DOIS TIPOS POR CAUSA DE COMPATIBILIDADE DE NAVEGADORES
        const code = e.which || e.keyCode
        const ENTER = 13;

        e.persist();
        // FAZER REQUISIÇÃO QUANDO PRECIONAR ENTER
        if (code !== ENTER && e.type === 'keyup')
          return;

        //LIMPANDO TELA AO FAZER NOVA PESQUISA
        this.state.userinfo = null;
        this.state.repos= initialReposState;
        this.state.starred= initialReposState;
        ///////////////////////////////////////


        if(value === ''){
          this.state.emptyLabel = true;
          throw new Error(['label empty'])
        }else{
          this.state.emptyLabel = false;
        }

        this.setState({ isFetching: true })
        const user = await axios.get(`https://api.github.com/users/${value}`)

        this.setState({
          userinfo: {
            avatar: user.data.avatar_url,
            login: user.data.login,
            username: user.data.name,
            repos: user.data.public_repos,
            followers: user.data.followers,
            following: user.data.following
          },
          repos: initialReposState,
          starred: initialReposState
        })

      } catch(err) {
      } finally {
        this.setState({ isFetching: false })
      }
  }

  getRepo (type, page = 1) {
    return async (e) => {
      try {
        const repo = await axios.get(`
          https://api.github.com/users/${this.state.userinfo.login}/${type}?per_page=${this.perPage}&page=${page}
        `)

        const link = repo.headers.link || '';
        const totalPages = link.match(/&page=(\d+)>; rel="last"/);

        this.setState({
          [type]: {
            repos: repo.data.map((item) => (
              {
              name: item.name,
              link: item.html_url
              }
            )),
            pagination: {
              total: Number(totalPages ? totalPages[1] : this.state[type].pagination.total), 
              activePage: page,
            }
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  render () {
    return (
      <>
        <GlobalStyle />
        <Container
          {...this.state}

          handleSearch={(e) => this.HandleSearch(e)}
          handleRepo={this.getRepo('repos')}
          handleStarred={this.getRepo('starred')}
          //O () E PARA EXECUTAR A FUNÇÃO retornada
          handlePagination={(type, page) => this.getRepo(type, page)()}
        />
        <Footer />
      </>
    )
  }
}
