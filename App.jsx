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
    backgroundColor: '#0d0d0d',
  },

  contenedor: {
    paddingBottom: 40,
  },

  head: {
    backgroundColor: '#000',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d4af37',
    elevation: 8,
  },

  logo: {
    width: 150,
    height: 90,
    resizeMode: 'contain',
  },

  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  titulo: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    letterSpacing: 1,
  },

  Subtitle: {
    color: '#d4af37',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
  },

  texCs: {
    color: '#f5f5f5',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 12,
    marginLeft: 3,
  },

  inCs: {
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#d4af37',
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 14,
    elevation: 3,
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  textoB: {
    color: '#f5f5f5',
    fontSize: 16,
  },

  boton: {
    marginTop: 35,
    alignSelf: 'center',
    borderRadius: 18,
    backgroundColor: '#d4af37',
    width: '80%',
    height: 55,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#d4af37',
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },

  textoBoton: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  resu: {
    marginTop: 35,
    backgroundColor: '#1b1b1b',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#d4af37',
    elevation: 5,
  },

  textoR: {
    color: '#d4af37',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  textoM: {
    color: '#f5f5f5',
    fontSize: 16,
    lineHeight: 28,
  },

  end: {
    marginTop: 40,
    marginBottom: 20,
  },

  promo: {
    color: '#d4af37',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },

});