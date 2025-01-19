const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'auf2vsuj', // Replace with your project ID
  dataset: 'production',     // Replace with your dataset name
  useCdn: false,
  token:process.env.NEW_SANITY_TOKEN              // Optional: Set to false for real-time data
});

const deleteDocuments = async () => {
  try {
    // This query deletes all documents of type "document"
    const deleted = await client.delete({ query: '*[_type == "product"]' });
    console.log('Documents deleted:', deleted);
  } catch (error) {
    console.error('Error deleting documents:', error.message);
  }
};

deleteDocuments();
