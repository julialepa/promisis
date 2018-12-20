import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Feed extends Component {
    static propTypes = {
        accessToken: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {
            media: []
        }
    }

    async fetchMedia() {
        const response = await fetch(
          "https://api.instagram.com/v1/users/self" +
            "/media/recent/?access_token=" +
            this.props.accessToken
        );
        const posts = await response.json();
        this.setState({ media: posts.data });
      }

    render () {
        return (
            <div>
                Ciao, sono il feed, stampatemi le immagini qui
            </div>
        )
    }
}