import React from 'react'
import SearchBarPage from './SearchBarPage'
import CompanyPage from './CompanyPage';
import names from './names'



class SearchEngineApp extends React.Component {
    constructor() {
        super()
        this.state = {
            // le boolean isLogged précise le component utilisé (SearchBarPage / CompanyPage)
            // true => page des informations de l'entreprise: CompanyPage
            // false => page de recherche: SearchBarPage
            isLogged: false,
            companyName: null
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleNew = this.handleNew.bind(this)
    }

    //  handleClick se charge de switcher de la page de recherche
    //  vers la page d'info (et vice versa)
    handleClick() {
        names.forEach(name => {
            if (this.state.companyName.toLowerCase() == name.toLowerCase()) {
                this.setState(prevState => {
                    return {
                        isLogged: !prevState.isLogged,
                        companyName: name
                    }
                })
            }
        })
    }

    //  handleChange est affecté à l'input dans lequel l'utilisateur entre
    //  l'entreprise qu'il cherche handleChange se charge de mettre à jour
    //  la valeur de companyName au fur et à mesure
    handleChange(event) {
        console.log(event)
        this.setState({
            isLogged: false,
            companyName: event
        })
    }

    //  handleNew se charge du passage de la page d'une entreprise à une autre
    handleNew(event) {
        this.setState({
            isLogged: false,
            companyName: event
        })
        setTimeout(function () {
            this.setState({
                isLogged: true,
                companyName: this.state.companyName
            })
        }.bind(this), 1);
    }

    render() {
        return (
            this.state.isLogged ?
                <CompanyPage companyName={this.state.companyName} handleClick={this.handleClick} handleNew={this.handleNew} />
                : <SearchBarPage error={this.state.errorMessage} handleChange={this.handleChange} handleClick={this.handleClick} />
        )
    }
}

export default SearchEngineApp