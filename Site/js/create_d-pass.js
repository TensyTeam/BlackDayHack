class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {FirstName: '', SecondName: '', MiddleName: '', Date: '', Nationality: '', PassportNumber: ''};
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onSecondNameChange = this.onSecondNameChange.bind(this);
        this.onMiddleNameChange = this.onMiddleNameChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onNationalityChange = this.onNationalityChange.bind(this);
        this.onPassportNumberChange = this.onPassportNumberChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        class Login extends React.Component {
            render() {
                return (
                    Loading
                )
            }
        }
        ReactDOM.render(
            <Login />,
            document.getElementById('react')
        );
        alert(`${this.state.Nationality} \n D-pass created successfull`);
        document.location.href = "https://playground24.ru/profile.html";
    }

    onFirstNameChange(event){
        this.setState({FirstName: event.target.value});
    }

    onSecondNameChange(event){
        this.setState({SecondName: event.target.value});
    }

    onMiddleNameChange(event) {
        this.setState({MiddleName: event.target.value});
    }

    onDateChange(event) {
        this.setState({Date: event.target.value});
    }

    onNationalityChange(event) {
        this.setState({Nationality: event.target.value});
    }

    onPassportNumberChange(event) {
        this.setState({PassportNumber: event.target.value});
    }

    render() {

        return (
            <form onSubmit={this.onSubmit} >
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input"
                               type="text"
                               name="FirstName"
                               placeholder="First name"
                               value={this.state.FirstName}
                               onChange={this.onFirstNameChange}/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input"
                               type="text"
                               name="SecondName"
                               placeholder="Second name"
                               value={this.state.SecondName}
                               onChange={this.onSecondNameChange}/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input"
                               type="text"
                               name="MiddleName"
                               placeholder="Midle name"
                               value={this.state.MiddleName}
                               onChange={this.onMiddleNameChange}/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input"
                               type="text"
                               name="Date"
                               placeholder="dd.mm.yyyy"
                               value={this.state.Date}
                               onChange={this.onDateChange}/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-calendar-alt"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input"
                               type="text"
                               name="Nationality"
                               placeholder="Nationality"
                               value={this.state.Nationality}
                               onChange={this.onNationalityChange}/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-user-secret"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input"
                               type="text"
                               name="PassportNumber"
                               placeholder="Passport number"
                               value={this.state.PassportNumber}
                               onChange={this.onPassportNumberChange}/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-passport"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <button
                        className="button is-link is-outlined is-fullwidth"
                    >
                        Create
                    </button>
                </div>
            </form>
        );
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById('react')
);