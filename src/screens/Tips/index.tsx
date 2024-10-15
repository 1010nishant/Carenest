import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TipsBlackIcon} from '../../assets/icons';
import axios from 'axios';

const Tips = () => {
  // const [tip, setTip] = useState('');
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchRandomTip = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://health-advice.p.rapidapi.com/advice',
  //         {
  //           headers: {
  //             'X-RapidAPI-Host': 'health-advice.p.rapidapi.com',
  //             'X-RapidAPI-Key':
  //               '4a73cc6ba2msh6e2800a14c51370p1c659ajsna8515e0e4831', // Replace with your RapidAPI key
  //           },
  //         },
  //       );

  //       const data = response.data;
  //       setTip(data.advice);
  //       setError(null);
  //     } catch (error) {
  //       console.error('Error fetching tip:', error);
  //       setError('Failed to fetch tip. Please try again later.');
  //     }
  //   };

  //   fetchRandomTip();
  // }, []);
  const healthTips = [
    'Incorporate more leafy greens like spinach, kale, and broccoli into your diet.',
    'Eat fatty fish rich in omega-3s like salmon or mackerel twice a week.',
    'Maintain hydration by drinking at least 8 glasses of water daily.',
    'Engage in low-impact cardio exercises like walking, swimming, or cycling.',
    'Practice balance exercises such as standing on one foot or Tai Chi to prevent falls.',
    'Include strength training exercises twice a week to maintain muscle mass.',
    'Consume whole grains like oatmeal, brown rice, and quinoa to boost fiber intake.',
    'Use olive oil or avocado oil as healthy fat alternatives.',
    'Limit processed foods and avoid added sugars.',
    'Snack on nuts and seeds for a quick protein boost.',
    'Incorporate daily stretching to improve flexibility and reduce stiffness.',
    'Prioritize getting 7-9 hours of sleep each night.',
    'Stay socially active to maintain mental sharpness.',
    'Practice mindful eating to help regulate appetite and digestion.',
    'Take vitamin D supplements if exposure to sunlight is limited.',
    'Eat berries like blueberries and strawberries for their antioxidants.',
    'Include lean proteins such as chicken, turkey, or tofu in your meals.',
    'Reduce salt intake to support heart health.',
    'Focus on portion control to manage weight and prevent overeating.',
    'Eat avocados for heart-healthy monounsaturated fats.',
    'Engage in regular yoga or Pilates to enhance flexibility and core strength.',
    'Drink herbal teas like green tea or chamomile for relaxation and antioxidants.',
    'Eat high-fiber foods like lentils, beans, and legumes for digestion.',
    'Incorporate probiotics like yogurt or kefir to support gut health.',
    'Limit alcohol consumption and avoid smoking.',
    'Schedule regular health checkups and screenings.',
    'Practice deep breathing exercises or meditation for stress reduction.',
    'Take short walks after meals to aid digestion.',
    'Eat bananas and other potassium-rich foods to maintain healthy blood pressure.',
    'Use smaller plates to control portion sizes.',
    'Stay active throughout the day by standing or moving every hour.',
    'Use resistance bands for strength training at home.',
    'Include eggs in your diet for their high-quality protein and nutrients.',
    'Add turmeric to your meals for its anti-inflammatory properties.',
    'Opt for baked or grilled options instead of fried foods.',
    'Consume dark chocolate in moderation for its heart-healthy benefits.',
    'Try dancing or gardening as enjoyable physical activities.',
    'Reduce caffeine intake, especially in the evening, to improve sleep quality.',
    'Eat sweet potatoes for their fiber and vitamin A content.',
    'Incorporate chia seeds or flaxseeds for omega-3 fatty acids.',
    'Limit red meat and opt for plant-based proteins like beans or lentils.',
    'Eat small, frequent meals to maintain energy levels throughout the day.',
    'Get your eyes checked regularly to monitor vision changes.',
    'Include mushrooms in your diet for their immune-boosting properties.',
    'Take short naps if needed but avoid sleeping too long during the day.',
    'Snack on raw vegetables like carrots and celery for healthy crunch.',
    'Choose whole fruits over fruit juices to avoid excess sugar.',
    'Start your day with a protein-rich breakfast like eggs or Greek yogurt.',
    'Maintain good posture to avoid back and neck pain.',
    'Take daily multivitamins if recommended by your healthcare provider.',
    'Incorporate citrus fruits like oranges and grapefruits for vitamin C.',
    'Limit processed snacks and opt for fresh options like fruits and nuts.',
    'Do water-based exercises if you experience joint pain or arthritis.',
    'Cook meals at home more often to control ingredients and portion sizes.',
    'Get regular dental checkups to maintain oral health.',
    'Eat whole-grain bread instead of white bread for more fiber.',
    'Use spices like cinnamon or ginger for added flavor without salt.',
    'Opt for almond or oat milk as dairy alternatives if lactose intolerant.',
    'Walk with a friend or group to stay motivated and social.',
    'Perform hand exercises to maintain dexterity and prevent stiffness.',
    'Eat cucumbers, bell peppers, and zucchini for hydrating vegetables.',
    'Incorporate smoothies made with fruits, vegetables, and protein powder.',
    'Monitor your weight regularly to catch any significant changes.',
    'Eat smaller portions of lean red meat if consumed, and limit intake.',
    'Keep a food journal to track your eating habits and identify areas to improve.',
    'Take time to chew food thoroughly to aid digestion.',
    'Focus on eating colorful meals with various fruits and vegetables.',
    'Reduce stress by engaging in hobbies you enjoy.',
    'Get enough calcium by consuming low-fat dairy or fortified plant-based alternatives.',
    'Reduce screen time in the evenings to improve sleep quality.',
    'Include more beans and legumes to your meals for plant-based protein.',
    'Eat slow-cooked oats or steel-cut oats for breakfast to stabilize blood sugar.',
    'Manage portion sizes by pre-planning meals and snacks.',
    'Snack on air-popped popcorn for a low-calorie, high-fiber treat.',
    'Stay physically active by incorporating fun activities like hiking or biking.',
    'Reduce saturated fats by choosing lean cuts of meat.',
    'Consult with a dietitian if you need personalized nutrition advice.',
    'Include calcium-rich foods like broccoli, almonds, and tofu.',
    'Practice good hygiene, including regular hand washing.',
    'Keep your mind sharp with puzzles, reading, or learning new skills.',
    'Take a vitamin B12 supplement if you follow a plant-based diet.',
    'Try resistance exercises like squats and lunges for lower body strength.',
    'Eat more fermented foods like sauerkraut and kimchi for gut health.',
    'Take breaks during long periods of sitting to stretch and move.',
    'Choose plant-based oils like canola or flaxseed oil for cooking.',
    'Keep your brain engaged by learning new languages or activities.',
    'Focus on high-protein meals for maintaining muscle mass.',
    'Use low-fat or fat-free dairy options when possible.',
    'Snack on cottage cheese or ricotta for a high-protein option.',
    'Incorporate seasonal fruits and vegetables to get varied nutrients.',
    'Stay connected with friends and family to boost emotional well-being.',
    'Limit added sugars by checking food labels on packaged goods.',
    'Include cauliflower and Brussels sprouts for their cancer-fighting properties.',
    'Use smaller utensils to slow down your eating pace.',
    'Reduce trans fats by avoiding processed and fried foods.',
    'Incorporate foods rich in magnesium like pumpkin seeds and almonds.',
    'Use herbs like basil, parsley, and cilantro for flavor without salt.',
  ];
  const getRandomAdvice = () => {
    const randomIndex = Math.floor(Math.random() * healthTips.length);
    return healthTips[randomIndex];
  };
  const [advice, setAdvice] = useState(getRandomAdvice());

  return (
    <View style={styles.rootContainer}>
      <View style={{backgroundColor: '#E6ECEF'}}>
        <Text
          style={{
            color: ' #585F62',
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 6,
          }}>
          DAILY TIPS
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            // padding: 20,
            color: '#F4B9B9',
          }}>
          TIP OF THE DAY
        </Text>
        <TipsBlackIcon width={100} height={100} />
      </View>
      <View
        style={{
          margin: 20,
          alignItems: 'center',
          backgroundColor: '#E7E391',
          borderRadius: 20,
          paddingVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'semibold',
            textAlign: 'center',
          }}>
          {advice}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#2a424f',
  },
});

export default Tips;
