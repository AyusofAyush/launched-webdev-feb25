const getConfig = () => {
    const env = process.env.REACT_APP_ENV || 'development'; // Default to development if not set
  
    const configs = {
      development: {
        apiUrl: 'http://localhost:5000',
      },
      staging: {
        apiUrl: 'https://staging.api.example.com',
      },
      production: {
        apiUrl: 'https://api.example.com',
      },
    };
  
    return configs[env] || configs.development;
  };
  
  export default getConfig;
  