import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {

  const participants = ['Lucas', 'Keila', 'José Felipe', 'Radassah', 'Tereza', 'Joyce', 'Flávia', 'Paulo', 'Matheus', 'Maria', 'Two', 'Giani', 'Samuel', 'Natã'];

  function handleParticipantAdd() {

    if (participants.includes("Lucas")) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome");
    }

  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
          Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2024
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
              +
          </Text>
        </TouchableOpacity>        
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não há participantes no evento. Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}
