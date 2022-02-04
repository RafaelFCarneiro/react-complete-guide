import { useEffect } from 'react';

import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = () => {
  const { sendRequest, status, data, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && (!data || !data.length)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={data} />;
};

export default AllQuotes;