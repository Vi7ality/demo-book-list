import React, { useState } from 'react';
import TableHeader from '../TableHeader';
import styles from './Table.module.scss';
import Container from '../../../../shared/Container';
import TableRow from '../TableRow';
import { useGetAllEventsQuery } from '../../../../services/api';
import { eventType } from '../../../../services/types';

const EventsTable: React.FC = () => {
  const { data, isLoading } = useGetAllEventsQuery();

  const [sortConfig, setSortConfig] = useState<{
    key: keyof eventType;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig || !data) return data;
    const sortedEvents = [...data];
    sortedEvents.sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      if (valueA < valueB) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortedEvents;
  }, [data, sortConfig]);

  const handleSort = (key: keyof eventType) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  if ((!isLoading && !data) || data?.length === 0) {
    return (
      <Container>
        <h2>No events available.</h2>
      </Container>
    );
  }

  return (
    <Container>
      <table className={styles.table}>
        <TableHeader handleSort={handleSort} />
        <tbody>
          {sortedData?.map(event => (
            <TableRow
              key={event.id}
              eventName={event.name}
              date={event.date}
              category={event.category}
              ticketCount={event.tickets}
              price={event.price}
              id={event.id}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default EventsTable;
