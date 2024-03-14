import React from 'react';
import {Text, Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const LineGraphPowerTime = () => {
  // Generate data points
  const data = [
    {time: 0, power: 2.0},
    {time: 10, power: 4.5},
    {time: 20, power: 2.8},
    {time: 30, power: 8.0},
    {time: 40, power: 9.9},
    {time: 50, power: 4.3},
    {time: 60, power: 7.2},
  ];

  // Extract labels and data values
  const labels = data.map(point => point.time.toString() + 's'); 
  const powerData = data.map(point => point.power);

  return (
    <>
      <Text style={styles.header}>Line Chart</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: powerData,
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 1, // Display one decimal place for power readings
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        yAxisSuffix="kW"
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        styles={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});

export default LineGraphPowerTime;
