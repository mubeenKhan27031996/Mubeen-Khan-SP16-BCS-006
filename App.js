// import React,{Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
  
  
  
// } from 'react-native';



// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//         resultText:""
//     }

//     this.operations=['D','+','-','*','/']

    
//   }
//   calculateResult(){

//     const text=this.state.resultText

//   }
//   buttonPressed(text){
//     if(text=='='){

//       return this.calculateResult()
//     }
//     // console.log(text)
//     this.setState({
//         resultText: this.state.resultText+text
//     })
    
//   }
//   operate(operations){
//     switch(operations){
//       case'D':
//       let text=this.state.resultText.split('')
//       text.pop()
//       this.setState({
//         resultText: text.join('')
//       })
//       break
//     case '+':
//     case '-':
//     case '*':
//     case '/':
//           const lastChar= this.state.resultText.split('').pop()

//           if(this.operations.indexOf(lastChar)>0) return


//           if(this.state.text=="") return
//           this.setState({
//             resultText: this.state.resultText+operations
//           })

//     }
//   }

//   render() {
//       let rows=[]
//       let nums=[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
//       for(let i=0;i<4;i++){
//           let row=[]
//           for(let j=0;j<3;j++){
//               row.push(
//               <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}> 
//                 <Text style={styles.btntext}>{nums[i][j]}</Text>
//               </TouchableOpacity>
//             )
//           }
//           rows.push(<View style={styles.row}>{row}</View>)
//       }
      
//       let ops=[]
//       for(let i=0; i<5; i++){
//           ops.push(<TouchableOpacity onPress={()=>this.operate(this.operations[i])} style={styles.btn}> 
//             <Text style={[styles.btntext,styles.white]}>{this.operations[i]}</Text>
//         </TouchableOpacity>)
//       }
//     return(
//       <View style={styles.container}>
//         <View style={styles.result}>
//             <Text style={styles.resultText}>{this.state.resultText}</Text>
//         </View>
//         <View style={styles.calculations}>
//             <Text style={styles.calculationText}>121</Text>
//         </View>
//         <View style={styles.buttons}>
//           <View style={styles.numbers}>
//                 {rows}
//           </View>
//           <View style={styles.operations}>
//                 {ops}
//             </View>
//           </View>
//       </View>

//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex:1
//     },
//     white: {
//         color:'white'
//     },
//     resultText: {
//       fontSize: 30,
//       color: 'white'
//     },
//     btntext: {
//         fontSize:30
//     },
//     btn: {
//       flex:1,
//       alignItems:'center',
//       alignSelf:'stretch',
//       justifyContent: 'center'
//     },
//     calculationText: {
//       fontSize:24,
//       color: 'white'
//     },
//     row :{
//       flex: 1,
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       alignItems:  'center'
         
//     },
//     result: {
//       flex:2,
//       backgroundColor:'red',
//       justifyContent: 'center',
//       alignContent: 'flex-end'

//     },
//     calculations: {
//       flex:1,
//       backgroundColor:'green',
//       justifyContent: 'center',
//       alignContent: 'flex-end'
//     },
//     buttons: {
//       flex: 7,
//       flexDirection: 'row'
//     },
//     numbers: {
//       flex: 3,
//       backgroundColor: 'yellow'
//     },
//     operations: {
//       flex: 1,
//       justifyContent: 'space-around',
//       backgroundColor: 'black',
//       alignItems:'stretch'
//     }
// })

// import React, { Component } from 'react';
// import { View ,Button,Text,TextInput} from 'react-native';

// export default class FlexDirectionBasics extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: '' };
//   }
//   render() {
//     return (
  
      
//       <View style={{flex: 1, flexDirection: 'column'}}>
//         <View style={{ flex: 2, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//           <Text>Logo</Text>
//         </View>
//         <View style={{ flex: 8, flexDirection: "row" }}>
//           <View style={{ flex: 2 }}>
//             <View style={{ flex: 2, backgroundColor: "green" }}></View>
//             <View style={{ flex: 2, backgroundColor: "blue" }}></View>
//             <View style={{ flex: 2, backgroundColor: "red" }}></View>
//             <View style={{ flex: 2, backgroundColor: "white" }}></View>
//             <View style={{ flex: 2, backgroundColor: "black" }}></View>
//           </View>
//           <View style={{ flex: 4, flexDirection: "column", backgroundColor: "black", justifyContent: "space-around" }}>
//             <TextInput style={{ backgroundColor: "white" }} placeholder="Enter Username" onChangeText={(username) => this.setState({ username })} />
//             <Text style={{ color: "white", textAlign: "center" }}>Welcome to {this.state.username}</Text>
//           </View>
//         </View>
//         </View>
//         <View style={{ flex: 2, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//           <Text>2019 Copyright</Text>
//         </View>
//       </View>
      
      


//     );
//   }
// };


import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: " " };
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 2, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text>Logo</Text>
        </View>
        <View style={{ flex: 8, flexDirection: "row" }}>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 2, backgroundColor: "green" }}></View>
            <View style={{ flex: 2, backgroundColor: "blue" }}></View>
            <View style={{ flex: 2, backgroundColor: "white" }}></View>
            <View style={{ flex: 2, backgroundColor: "black" }}></View>
            <View style={{ flex: 2, backgroundColor: "pink" }}></View>
          </View>
          <View style={{ flex: 4, flexDirection: "column", backgroundColor: "red", justifyContent: "space-around" }}>
            <TextInput style={{ backgroundColor: "white" }} placeholder="Enter Username" onChangeText={(username) => this.setState({ username })} />
            <Text style={{ color: "white", textAlign: "center" }}>Welcome to {this.state.username}</Text>
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text>2019 Copyright</Text>
        </View>
      </View >
    );
  }
}


export function Username(props) {
  return <TextInput value={props.username} style={{ color: props.colorName }} />;
}

const styles = StyleSheet.create({
  textInputStyle: {
    width: 100,
    borderRadius: 4,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: 'white',
    textAlign: "center"
  },
  
  flex2: {
    flex: 2
  },
  centerHorizontlAndVertically: {
    justifyContent: "center",
  

  },
});
