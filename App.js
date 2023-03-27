import { View, Text } from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

export default function App() {
  // useEffect(()=> {
  //   getData();
  // }, [])

  // const getData = async() => {
  //   const res = await axios.get('https://fakestoreapi.com/products');
  //   console.log(res.data);
  // }

  // without async await 

  // const getData = () => {
  //   axios.get('https://fakestoreapi.com/products/categories', {headers: {
  //     'Authorization':'Bearer ',
  //     'Content-Type': 'application/json',
  //   }})
  //   .then(res=>{
  //     console.log(res.data);
  //   })
  // }

  // post method 

  // using async await 

// useEffect(() => {
//   addNewProduct();
// }, [])
// const addNewProduct = async()=> {
//   const data =  {
//     title: 'test product',
//     price: 13.5,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// };

//   const res = await axios.post('https://fakestoreapi.com/products', data);
//   console.log('data',res.data)
// }

// post using Promise 

// useEffect(() => {
//   addNewProduct();
// }, [])
// const addNewProduct = ()=> {
//   const data =  {
//     title: 'test product',
//     price: 13.5,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// };

//   axios.post('https://fakestoreapi.com/products', data).then(res=>{
//     console.log('data', res.data);
//   });
//   console.log('data',res.data)
// }


// update (put) using async await 

// useEffect(() => {
//   updateAProduct();
// }, [])

// const updateAProduct = async() => {
//   const data = {
//     title: 'test product',
//     price: 13.5,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// };

// const res = await axios.put('https://fakestoreapi.com/products/7', data);
// console.log('data', res.data);

// }

// PUT using Promise

// const updateAProduct = () => {
//   const data = {
//     title: 'test product',
//     price: 13.7,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// };

// axios.put('https://fakestoreapi.com/products/7', data).then(res=>{
//   console.log('data', res.data);
// })

// }

// update (PATCH) using async await 

// useEffect(() => {
//   patchProductData();
// }, []);

// const patchProductData = async() => {
//   const data = {
//     title: 'test product',
//     price: 13.589788,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// }
// const res = await axios.patch('https://fakestoreapi.com/products/7', data);
// console.log('data', res.data);
// };

//Patch using promise

// const patchProductData = () => {
//   const data = {
//     title: 'test product',
//     price: 13.57,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// };
// axios.patch('https://fakestoreapi.com/products/7',data).then(res=>console.log('data', res.data));
// }

//Delete using async await

// useEffect(() => {
//   deleteData();
// })

// const deleteData = async() => {
//   const data = {
//     title: 'test product',
//     price: 13.5,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// }
// const res = await axios.delete('https://fakestoreapi.com/products/6', data);
// console.log(res.data)
// }

// const deleteData = () => {
//   axios.delete('https://fakestoreapi.com/products/6').then(res=> {
//     console.log(res.data);
//   })
// }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}