export default {
    onChange(name, value) {
        console.log('DataFormFunctions onChange');
        console.log(name);
        console.log(value);
        this.setState({
            [name]:value
        });
        console.log(this.state);
    },
    onSubmit() {
        console.log('DataFormFunctions onSubmit');
        console.log(this.state);
        this.props.onSubmit(this.state);
    }
}