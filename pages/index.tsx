import React, { FC } from 'react';
import useSWR from 'swr';
import EventHorizontalCard from '../components/EventHorizontalCard';
import Layout from '../components/Layout';

const EventsList: FC = () => {
  const { data, error } = useSWR('/api/events');

  const events = data && !error ? data : [];

  return (
    <Layout>
      <div className="w-10/12 md:w-1/2 mx-auto mt-32">
        {!data && <span className="block text-center text-md">loading...</span>}
        {events.map((event) => (
          <EventHorizontalCard event={event} key={event.slug} />
        ))}
      </div>
    </Layout>
  );
};

export default EventsList;
