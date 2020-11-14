import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {gql, useMutation} from '@apollo/client';

const NEW_CMD = gql`
  mutation newCommand($name: AllowedCommand!, $message: String!){
    command(name: $name, message: $message)
  }
`;

const useStyles = makeStyles((theme) => ({
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    title: {
        padding: '20px 20px 0',
        textAlign: "center",
    },
    submit: {
        height: "55px",
    },
    result: {
        margin: "20px",
    },
}));

const CommandForm = ({client}) => {
    const classes = useStyles();
    const [message, setMessage] = React.useState('');
    const [name, setName] = React.useState('');
    const [showResponse, setShowResponse] = React.useState(false);
    const [
        newCommand, 
        { data, loading: mutationLoading, error: mutationError }
    ] = useMutation(NEW_CMD);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleCommandChange = (event) => {
        setShowResponse(false);
        setName(event.target.value);
    };
    
    const handleSubmit = () => {
        if (name) {
            setShowResponse(true);
            newCommand({ variables: { name, message } });
        }
    };

    return (
        <Paper className="form-container" elevation={6} >
            <h1 className={classes.title}>Mission Control</h1>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField label="Message" variant="outlined" onChange={handleMessageChange} value={message}/>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="command-label">Command</InputLabel>
                    <Select
                        labelId="command-label"
                        value={name}
                        onChange={handleCommandChange}
                        label="Command"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="FLY">Fly</MenuItem>
                        <MenuItem value="LAND">Land</MenuItem>
                    </Select>
                </FormControl>    
                <Button className={classes.submit} variant="contained" color="secondary" onClick={handleSubmit}>
                    Submit
                </Button>
            </form>
            <span className={classes.result}>
                {mutationLoading ? 'Loading...' : 
                mutationError ? 'Error: server is unavailable': 
                data && showResponse ? `Response: ${data.command}`: ''}
            </span>
        </Paper>
    );
};

export default CommandForm;