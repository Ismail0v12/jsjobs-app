import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {loginStyle} from './login.style.ts';
import {COLORS, icons} from '../../constants';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  function togglePassword() {
    setShowPassword(d => !d);
  }

  return (
    <SafeAreaView style={loginStyle.container}>
      <View style={loginStyle.wrapper}>
        <Text style={loginStyle.text}>Login</Text>
        <View style={loginStyle.searchContainer}>
          <TextInput
            style={loginStyle.input}
            placeholderTextColor={COLORS.primary}
            placeholder="Username"
          />
          <View style={loginStyle.passwordInputWrapper}>
            <TextInput
              placeholderTextColor={COLORS.primary}
              style={loginStyle.input}
              placeholder="Password"
              secureTextEntry={showPassword}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={loginStyle.passwordIcon}
              onPress={togglePassword}>
              <Image
                source={icons.eyeIcon}
                resizeMode="contain"
                alt="Show and hide password"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={loginStyle.btn}>
          <Text style={loginStyle.btnText}>Sign in</Text>
        </TouchableOpacity>
        <View style={loginStyle.questionWrapper}>
          <Text style={loginStyle.questionSelf}>
            Don't have an account yet?{' '}
            <Text style={loginStyle.questionLink}>Sign up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
