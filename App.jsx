import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [costo, setCosto] = useState("")
  const [salario, setSalario] = useState("")
  const [transmision, setTransmision] = useState("manual");
  const [pago, setPago] = useState("credito");
  const [costIp, setCostIp] = useState("");
  const [costF, setCostF] = useState("");
  const [tot, setTot] = useState(null);

const formato = (num) => {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

};
  const CalcularP = () => {
    const costoN = parseFloat(costo);
    const salarioN = parseFloat(salario);
    if (pago ==  "contado") {
      if(transmision == "automatica"){
        const costE = costoN + 1500.00;
        const costIp = costE * 0.07;
        const costF = costE + costIp;
        setTot(`Costo original: ${formato(costoN)}
        Extra por transmision: ${formato(1500)}
        ITBMS 7%: ${formato(costIp)}
        Total: ${formato(costF)}
        `)
      }
      else { 
        const costIp = costoN * 0.07;
        const costF = costoN + costIp;
        setTot(`\nCosto original: ${formato(costoN)}
        \nITBMS 7%: ${formato(costIp)}
        \nTotal: ${formato(costF)}
        `)
      }
      
    }
    else if (pago == "credito") {
      if (transmision == "automatica"){
        const costE = costoN + 1500.00;
        const capF = costE  * Math.pow((1+0.08),9);
        const costIp = capF * 0.07;
        const costF = capF + costIp;
        const letra = costF / (9*12);
        const salarioC = salarioN * 0.30;

        const mens = salarioC >= letra ? "Aprobado" : "No Aprobado";

        setTot(`\n Costo original: ${formato(costoN)}
        \nExtra por transmision: ${formato(1500)}
        \nInteres compuesto del 8%: ${formato(capF)}
        \nITBMS 7%: ${formato(costIp)}
        \nTotal: ${formato(costF)}
        \nLetra Mensual: ${formato(letra)}
        \n30% de su salario: ${formato(salarioC)}
        \n${mens}
        `)
      }
      else{
        const capF = costoN * Math.pow((1+0.08),9);
        const costIp = capF * 0.07;
        const costF = capF + costIp;
        const letra = costF / (9*12);
        const salarioC = salarioN * 0.30;

        const mens = salarioC >= letra ? "Aprobado" : "No Aprobado";

        setTot(`\nCosto original: ${formato(costoN)}
        \nInteres compuesto del 8%: ${formato(capF)}
        \nITBMS 7%: ${formato(costIp)}
        \nTotal: ${formato(costF)}
        \nLetra Mensual: ${formato(letra)}
        \n30% de su salario: ${formato(salarioC)}
        \n${mens}
        `)
      }
    }
  }

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenedor}>
      <View>
      <View style={styles.head}>
        <Image
         source={require('./assets/RentCartLogo.png')}
         style={styles.logo}
       />
      </View>
      <View style={styles.body}>
        <Text style={styles.titulo}>Venta de Autos</Text>
        <Text style={styles.texCs}>Costo:</Text>
        <TextInput 
        style={styles.inCs}
        value={costo}
        onChangeText={setCosto}
        placeholder='Ingrese el costo del vehiculo'
        placeholderTextColor={'#aaa'} 
        keyboardType='numeric'
        />
        <Text style={styles.texCs}>Salario:</Text>
        <TextInput 
        style={styles.inCs}
        value={salario}
        onChangeText={setSalario}
        placeholder='Ingrese su salario'
        placeholderTextColor={'#aaa'}
        keyboardType='numeric'
        />

        <Text style={styles.Subtitle}>Forma de pago</Text>

        <View style={styles.buttons}>
          <RadioButton
           value="manual"
           status={ transmision === "manual" ? "checked" : "unchecked" }
            onPress={() => setTransmision("manual")}
            color = '#d4af37'
            uncheckedColor="#f2d57e"
          />

       <Text style={styles.textoB}>Manual</Text>
        </View>

        <View style={styles.buttons}>
          <RadioButton 
            value='automatica'
            status={ transmision === 'automatica' ? 'checked' : 'unchecked' }
            onPress={() => setTransmision('automatica')}
            color = '#d4af37'
            uncheckedColor="#f2d57e"
            />
            <Text style={styles.textoB}>Automatica</Text>
        </View>
        <Text style={styles.Subtitle}>Forma de pago</Text>

        <View style={styles.buttons}>
          <RadioButton
          value='credito'
          status={ pago === 'credito' ? 'checked' : 'unchecked'}
          onPress={() => setPago('credito')}
          color = '#d4af37'
          uncheckedColor="#f2d57e"
          />
          <Text style={styles.textoB}>Crédito</Text>
        </View>

        <View style={styles.buttons}>
          <RadioButton
          value='contado'
          status={ pago === 'contado' ? 'checked' : 'unchecked'}
          onPress={() => setPago('contado')}
          color = '#d4af37'
          uncheckedColor="#f2d57e"
          />
          <Text style={styles.textoB}>Contado</Text>
        </View>

        <TouchableOpacity
           style={styles.boton}
           onPress={CalcularP}
          >
         <Text style={styles.textoBoton}>
          CALCULAR PAGO
        </Text>
        </TouchableOpacity>
        <View style={styles.resu}>
          <Text style={styles.textoR}>
          Factura Digital: {"\n"}
          <Text style={styles.textoM}>
            {tot}
          </Text>
        </Text>
        </View>
        <View style={styles.end}>
          <Text style={styles.promo}>
            ¡Gracias Por Preferir RentCartX!
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#121212',
   
  },

  head: {
    backgroundColor: '#050505',
    height:100,
    padding:40,
  },

  logo: {
    width:125,
    height:85,
    marginLeft: -32,
    borderRadius:10,
    borderBottomColor: '#d4af37'
  },

  titulo: {
    color: '#F5F5F5',
    textAlign: "center",
    fontSize: 25,
    marginTop: 15,
    marginBottom: 15
  },

  Subtitle:{
    color: '#f5f5f5',
    fontSize: 15,
    marginTop: 20,
    marginLeft: 10
  },

  body :{
    flex:1
  },

  texCs:{
    color :'#f5f5f5',
    fontSize: 15,
    marginBottom : 10,
    marginTop: 10
  },

  inCs:{
    backgroundColor: "#FFD86B",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#D4AF37",
    color: "#495959",
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 13
  },

  buttons: {
    flexDirection: 'row',
  },

  boton:
    {
     marginTop: 20,
     alignSelf:"center",
     borderRadius: 20,
     backgroundColor:"#d4af37",
     width:"50%",
     height:45
    },

    textoBoton:{
   color:"#f5f5f5",
   fontSize:18,
   textAlign: "center",
   padding: 10
   },

  textoB: {
    color: '#f5f5f5',
    padding: 8,
    textAlign: 'left'
  },
  textoR: {
    color: '#0000',
    fontSize:20,
    marginTop: 20,
    textAlign: "center"
  },
  textoM:{
    color: '#0000',
    marginLeft: 20,
    fontSize: 19,
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:15
  },
  resu: {
    marginTop: 35,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    width: 375,
    height:425,
    marginLeft: 10,
  }, 

  end: {
    marginTop: 100
  },
  promo: {
    color: "#d4af37",
    textAlign: "center",
    marginBottom: 10
  }
});
