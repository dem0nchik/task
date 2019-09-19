import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            age: '',
            sexM: true,
            sexW: true,

        }
    }
    onNameChange(e) {
        this.setState({name: e.target.value})
        this.props.filterPosts({...this.state, name: e.target.value})
    }
    onLastnameChange(e) {
        this.setState({lastname: e.target.value})
        this.props.filterPosts({...this.state, lastname: e.target.value})
    }
    onAgeChange(e) {
        this.setState({age: e.target.value})
        this.props.filterPosts({...this.state, age: e.target.value})
    }
    onSexMChange(e) {
        this.setState({sexM: e.target.checked})
        this.props.filterPosts({...this.state, sexM: e.target.checked})
    }
    onSexWChange(e) {
        this.setState({sexW: e.target.checked})
        this.props.filterPosts({...this.state, sexW: e.target.checked})
    }
    render() {
        return(
            <Grid container style={{padding: 5, width: "300px"}} direction="column"  >
                <TextField
                    label="Имя"
                    margin="dense"
                    onChange={this.onNameChange.bind(this)}
                    value={this.state.name}
                />
                <TextField
                    label="Фамилия"
                    margin="dense"
                    onChange={this.onLastnameChange.bind(this)}
                    value={this.state.lastname}
                />
                <TextField
                    label="Возраст"
                    margin="dense"
                    onChange={this.onAgeChange.bind(this)}
                    value={this.state.age}
                />
                <Grid container direction="row"  >
                    <List style={{padding: 5}}>
                        <input type="checkbox" 
                        checked={this.state.sexM} 
                        onClick={this.onSexMChange.bind(this)}/> М
                    </List>
                    
                    <List style={{padding: 5}}>
                        <input type="checkbox" 
                        checked={this.state.sexW} 
                        onClick={this.onSexWChange.bind(this)}/> Ж
                    </List>
                </Grid>
            </Grid>
        )
    }
}

export default Filters