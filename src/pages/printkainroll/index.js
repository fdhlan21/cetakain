import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker, MyRadio } from '../../components'
import MyMenu from '../../components/MyMenu';

export default function PrintKainRoll({navigation}) {
    const [selectedKain, setSelectedKain] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [selectedDesain, setSelectedDesain] = useState('');
    const [designDetails, setDesignDetails] = useState(''); // State for additional input


  return (
    <SafeAreaView style={{
        flex:1,
        height:'100%',
        width:"100%",
        backgroundColor:colors.white,
        
    }}>
     <View style={{flex:1,
     width:"100%",
     height:"100%",
     }}>
<MyHeader title="Print Kain Roll"/>

<ScrollView>
    <View style={{padding:20}}>

     {/* KAIN */}
     <MyPicker label="Kain" data={[
         {label: "Pilih disini", value: " "},
        {label: "Tidak Bawa Kain", value: "Tidak Bawa Kain"},
        {label: "Bawa Kain Sendiri", value: "Bawa Kain Sendiri"},
     ]} 

     value={selectedKain}
     onValueChange={(value) => setSelectedKain(value)}

     />

    {selectedKain === 'Tidak Bawa Kain' && (
        <View>
        <MyRadio
  value={radioValue}
  onPress={() => setRadioValue('Armani')}
  onPress2={() => setRadioValue('Ceruti')}
  label1="Armani"
  label2="Ceruti"
/>
                <MyGap jarak={20} />
              </View>
    )}
<MyGap jarak={20}/>

{/* Ukuran Kain */}
<MyPicker label="Ukuran Kain" data={[
{label: "Pilih disini", value: " "},
  {label: "10 meter", value: "10 meter"},
  {label: "20 meter", value: "20 meter"},
  {label: "Dst", value: "Dst"},
]}/>

     <MyGap jarak={20}/>

      {/* DESAIN */}
      <MyPicker label="Desain" data={[
        {label: "Pilih disini", value: " "},
        {label: "Sudah ada desain", value: "Sudah ada desain"},
        {label: "Belum ada desain", value: "Belum ada desain"},
     ]} 

     value={selectedDesain}
     onValueChange={(value) => setSelectedDesain(value)}
     />

     {selectedDesain === 'Sudah ada desain' && (
        <View>
           
        </View>
     )}
    </View>
</ScrollView>

<View style={{padding:20}}>
    <MyButton
        title="Buat Pesanan"
        colorText={colors.white}
    />
</View>
     </View>
    </SafeAreaView>
  )
}