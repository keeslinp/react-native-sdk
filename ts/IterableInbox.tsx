'use strict'

import React, { Component, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import IterableInboxMessageList from './IterableInboxMessageList'
import IterableInboxEmptyState from './IterableInboxEmptyState'
import sampleMessages from './sampleMessageData.js'

const IterableInbox = () => {
   const inboxTitle = "Inbox";
   const [isDisplayMessage, setIsDisplayMessage] = useState(false);
   const [selectedMessageIdx, setSelectedMessageIdx] = useState(null);
   const [messages, setMessages] = useState(sampleMessages);

   function handleMessageSelect(index) {
      let updatedMessages = messages;
      let updatedMessage = messages[index];

      if(!updatedMessage.read) {
         updatedMessage.read = true
      }

      updatedMessages[index] = updatedMessage;
      setMessages([...updatedMessages]);
      setIsDisplayMessage(true);
      setSelectedMessageIdx(index);
   }

   function showMessageList() {
      return messages.length ? 
         <IterableInboxMessageList 
            messages={messages}
            handleMessageSelect={handleMessageSelect}
         ></IterableInboxMessageList> : 
         <IterableInboxEmptyState></IterableInboxEmptyState>
   }

   return(
      <View style={styles.container}>
         <Text style={styles.headline}>
            {inboxTitle}
         </Text>
         {showMessageList()}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: '100%',
      backgroundColor: 'whitesmoke', 
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: 50
   },

   headline: {
      fontWeight: 'bold' ,
      fontSize: 40,
      width: '100%',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      backgroundColor: 'whitesmoke'
   }
})

export default IterableInbox;