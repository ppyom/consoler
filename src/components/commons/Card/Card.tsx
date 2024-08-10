import React from 'react';
import Button from '../Button/Button.tsx';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Card.module.css';
import type { CardType } from '../../../types/card.ts';

interface CardProps extends CardType {
  line?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  updatedAt,
  line = false,
}) => {
  return (
    <div className={`${styles.card} ${line ? styles.line : ''}`}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{updatedAt}</p>
      </div>
      <div className={styles.btnGroup}>
        <Button>
          <EditIcon fontSize="small" />
        </Button>
        <Button>
          <DeleteIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
};

export default Card;
