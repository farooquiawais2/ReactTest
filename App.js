/* eslint-disable prettier/prettier */
// import React, { Fragment, Component } from 'react';
// import Question from './src/components/Question';

// export default class App extends Component {
//     render() {
//         return (
//             // <Logo />
//             <Question />
//         );
//     }
// }

// export default App;



// import React, { Component } from 'react';
// import { View, Text, Button } from 'react-native';

// import data from './src/data/questions.json';

// const newdata = data.map((data) => {
//     console.log(`Correct ans = ${data.correct_answer}`);
// });
// export default class App extends Component {
//     state = {
//         currentState: 1,
//     };

//     onPress = () => {
//         if (this.state.currentState < 20 && this.state.currentState > 0) {
//             this.setState({
//                 currentState: this.state.currentState + 1,
//             });
//         } else {
//             this.setState({
//                 currentState: this.state.currentState,
//             });
//         }
//     };

//     render() {
//         return (
//             <View style={{ paddingTop: 25 }}>
//                 <Text>{this.state.currentState}</Text>
//                 <Button title="Change Text" onPress={this.onPress} />
//             </View>
//         );
//     }
// }


import React, { Fragment, Component } from 'react';
import { View, Text } from 'react-native';

import { ProgressBar } from './src/components/ProgressBar';
import { ResultProgressBar } from './src/components/ResultProgressBar';
import { Icon } from './src/components/Icon';
import { Button } from './src/components/Button';

import data from './src/data/questions.json';



const renderStar = (color = '#000000') => {
    return <Icon width={10} height={10} source={require('./src/icons/star.png')} color={color} />;
};


export default class App extends Component {

    state = {
        i: 0,
        currentState: 1,
        category: 'Entertainment Video Games',
        type: 'multiple',
        difficulty: 'hard',
        question: 'What was the name of the hero in the 80s animated video game Dragons Lair?',
        correct_answer: 'Dirk the Daring',
        incorrect_answers: [
            'Arthur',
            'Sir Toby Belch',
            'Guy of Gisbourne',
        ],
        correct: 1,
        ans: '',
        wr: 'Sorry!',
    };

    onPress = () => {
        const newdata = data;
        // console.log(`Correct ans = ${newdata}`);

        if (this.state.currentState < 20 && this.state.currentState > 0) {
            this.setState({
                i: this.state.i + 1,
                currentState: data[this.state.i + 1].id,
                category: data[this.state.i + 1].category,
                type: data[this.state.i + 1].type,
                difficulty: data[this.state.i + 1].difficulty,
                question: data[this.state.i + 1].question,
                correct_answer: data[this.state.i + 1].correct_answer,
                incorrect_answers: [
                    data[this.state.i + 1].incorrect_answers[0],
                    data[this.state.i + 1].incorrect_answers[1],
                    data[this.state.i + 1].incorrect_answers[2],
                ],
                ans: '',
                wr: '',
            });
        } else {
            this.setState({
                currentState: this.state.currentState,
            });
        }
        // });
    };
    onCorrect = () => {
        if (this.state.correct < 20 && this.state.correct > 0) {
            this.setState({
                correct: this.state.correct + 1,
                ans: 'Correct!',
            });
        } else {
            this.setState({
                correct: this.state.correct,
            });
        }
    };
    onWrong = () => {
        this.setState({
            ans: 'Sorry!',
        });
    };
    render() {
        return (
            <View style={{ marginTop: 5 }}>
                <ProgressBar progress={this.state.currentState * 18} />
                <View style={{ marginTop: 20, marginHorizontal: 40 }}>
                    <Text style={{ fontSize: 20 }}>Question {this.state.currentState} of 20</Text>
                    <Text style={{ fontSize: 13, color: 'gray' }}>{this.state.category}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {renderStar()}
                        {renderStar()}
                        {renderStar()}
                        {renderStar()}
                        {renderStar('#d9d9d9')}
                        {renderStar('#d9d9d9')}
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Text style={{ fontSize: 15 }}>
                            {this.state.question}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button btnBackgroundColor="#000" btnTextColor="#fff" style={{ marginVertical: 15 }}
                        onPress={this.onCorrect}
                    >
                        {this.state.correct_answer}
                    </Button>
                    <Button btnBackgroundColor="#fff" btnTextColor="#000" style={{ marginVertical: 15 }}
                        onPress={this.onWrong}>
                        {this.state.incorrect_answers[0]}
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button btnBackgroundColor="#fff" btnTextColor="#000" style={{ marginVertical: 15 }} onPress={this.onWrong}>
                        {this.state.incorrect_answers[1]}
                    </Button>
                    <Button btnBackgroundColor="#fff" btnTextColor="#000" style={{ marginVertical: 15 }} onPress={this.onWrong}>
                        {this.state.incorrect_answers[2]}
                    </Button>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.state.ans}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button btnBackgroundColor="#fff" btnTextColor="#000" style={{ marginVertical: 15 }}
                        onPress={this.onPress}
                    >
                        Next Question
                    </Button>
                </View>
                <View style={{ bottom: 0, marginTop: '80%' }}><ResultProgressBar progress1={this.state.correct * 18} /></View>
            </View>
        );
    }
}

// export default App;
