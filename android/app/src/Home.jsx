import React from 'react';  
import { View, Text } from 'react-native';  
import { icons } from 'lucide-react-native';  

const Icon = ({ name, color = 'black', size = 24 }) => {  
    const LucideIcon = icons[name];  

    if (!LucideIcon) {  
        console.error(`Icon with name "${name}" not found!`);  
        return null; // Return null or a fallback UI if necessary  
    }  

    return <LucideIcon color={color} size={size} />;  
};  

export default function Home() {  
    return (  
        <View className="flex justify-center items-center pt-50">  
            <Icon name="home" />  
            <Text className="text-3xl text-center text-red-700 underline">Welcome to Suguvie</Text>  
        </View>  
    );  
}