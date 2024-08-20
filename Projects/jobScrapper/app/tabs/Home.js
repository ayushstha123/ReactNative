import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Function to handle button click
  const handleSearch = async () => {
    const formattedSearch = search.trim().replace(/\s+/g, '+'); // Replace spaces with plus signs
    const urls = [
      `http://localhost:3000/api/scrape-jobs?category=${formattedSearch}`,
      `http://localhost:3000/api/scrape-jobs1?category=${formattedSearch}`
    ];

    setLoading(true);
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(response => response.json()));

      // Combine results from both APIs
      const combinedJobs = [...data[0].jobs, ...data[1].jobs];
      setInternships(combinedJobs);
    } catch (error) {
      console.error('Error fetching internships:', error);
    } finally {
      setLoading(false);
    }
  };

  // Optional: Fetch internships initially without query
  useEffect(() => {
    handleSearch();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={(text) => setSearch(text)}
        style={styles.input}
        placeholder="Search"
      />
      <Button title="Search" onPress={handleSearch} />
      <Text style={styles.title}>Internships</Text>
      <FlatList
        data={internships}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.jobContainer}>
            <Text style={styles.jobTitle}>{item.title || 'No Title'}</Text>
            <Text style={styles.company}>{item.company || 'No Company'}</Text>
            <Text style={styles.location}>{item.detailsLink || 'No Location'}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  jobContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#999',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  experience: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  salary: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  deadline: {
    fontSize: 14,
    color: '#e74c3c',
    marginTop: 8,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});
