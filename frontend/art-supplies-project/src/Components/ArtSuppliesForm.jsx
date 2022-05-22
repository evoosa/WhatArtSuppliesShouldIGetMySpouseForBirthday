import React, {Component} from "react";
import PreferredArtTypes from "./PreferredArtTypes";
import SafeBetChoice from "./SafeBetChoice";
import WelcomePage from "./WelcomePage";
import CompactChoice from "./CompactChoice"
import LikesExperimentingChoice from "./LikesExperimentingChoice"
import MessyChoice from "./MessyChoice.jsx"
import TogetherChoice from "./TogetherChoice.jsx"
import Confirm from "./Confirm";
import Success from "./Success";

export class ArtSuppliesForm extends Component {
    state = {
        step: 1,
        crafting: false,
        painting: false,
        sketching: false,
        writing: false,
        compact: '1',
        likesExperimenting: '1',
        messy: '1',
        together: '1',
        safeBet: '1'
    };

    radio_button_sx_override = {
        '& .MuiFormControlLabel-label': {
            fontFamily: 'system-ui',
        },
    }

    // Proceed to next step
    continues = (e) => {
        e.preventDefault();
        const {step} = this.state;
        this.setState({
            step: step + 1,
        });
        console.log(this.state)
    };

    // Go back to prev step
    back = (e) => {
        e.preventDefault();
        const {step} = this.state;
        this.setState({
            step: step - 1,
        });
        console.log(this.state)
    };

    // Handle fields change
    handleChoice = (e) => {
        this.state[e.target.name] = e.target.value
    };

    handleArtTypeToggleChange = (key, val) => {
        this.state[key] = val
    }

    render() {
        const {step} = this.state;
        switch (step) {
            case 1:
                return (
                    <WelcomePage
                        continues={this.continues}
                    />
                );
            case 2:
                return (
                    <PreferredArtTypes
                        handleChoice={this.handleArtTypeToggleChange}
                        back={this.back}
                        continues={this.continues}
                        state={this.state}
                    />
                );
            case 3:
                return (
                    <CompactChoice
                        handleChoice={this.handleChoice}
                        back={this.back}
                        continues={this.continues}
                        state={this.state}
                        sx_override={this.radio_button_sx_override}
                    />
                );
            case 4:
                return (
                    <LikesExperimentingChoice
                        handleChoice={this.handleChoice}
                        continues={this.continues}
                        state={this.state}
                        sx_override={this.radio_button_sx_override}
                    />
                );
            case 5:
                return (
                    <MessyChoice
                        handleChoice={this.handleChoice}
                        continues={this.continues}
                        state={this.state}
                        sx_override={this.radio_button_sx_override}
                    />
                );
            case 6:
                return (
                    <TogetherChoice
                        handleChoice={this.handleChoice}
                        continues={this.continues}
                        state={this.state}
                        sx_override={this.radio_button_sx_override}
                    />
                );
            case 7:
                return (
                    <SafeBetChoice
                        handleChoice={this.handleChoice}
                        continues={this.continues}
                        state={this.state}
                        sx_override={this.radio_button_sx_override}
                    />
                );
            //     case 4:
            //         return (
            //             <Confirm
            //                 values={values}
            //                 continues={this.continues}
            //             />
            //         );
            //     case 5:
            //         return <Success/>;
        }
    }
}

export default ArtSuppliesForm;