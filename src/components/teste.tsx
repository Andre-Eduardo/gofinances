// expo install expo-web-browser expo-auth-session expo-random
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function BtTeste() {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "859757751593-geq4f12pm378o6o85faqe3mv37qoqorc.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
    getUserData()
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }

    }
    );
    console.log(userInfoResponse)
    userInfoResponse.json().then(data => {
      setUserInfo(data);
      console.log(data)
    });
  }

  function showUserInfo() {

    return (

      // {showUserInfo()}
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}

      />
      // <TouchableOpacity
      //   title={accessToken ? "Get User Data" : "Login"}
      //   onPress={accessToken ? getUserData : () => { promptAsync({ useProxy: false, showInRecents: true }) }}
      // />
      // <StatusBar style="auto" />

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    userInfo: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    profilePic: {
      width: 50,
      height: 50
    }
  });