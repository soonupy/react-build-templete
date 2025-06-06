// src/Playground.tsx
import styles from './productItem.module.scss';
import SampleImage from '../../samples/SampleImage';
import { ShoppingCart } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';

const Basket = () => { 
  return (
    <button className={styles.basket}>
      <ShoppingCart size={16} />
      <p>담기</p>
    </button>
  );
};

const ProductDesc = () => {
  return (
    <div className={styles.productDesc}>
      <h4>[소반목] 인기 냉면 2종 (택1)</h4>
      
      <div className={styles.priceInfo}>
        <del>12,900원</del>
        <div className={styles.discountInfo}>
          <span>20%</span>
          <strong>10,900원~</strong>
        </div>
      </div>

      <small className={styles.meta}>
        <MessageSquareMore size={14} />
        <p>999+</p>
      </small>
    </div>
  );
};

export default function Playground() {
  return (
    <div className={styles.wrapper}>
      <SampleImage />
      <Basket />
      <ProductDesc />
    </div>
  );
}
