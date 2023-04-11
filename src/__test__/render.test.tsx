import React from 'react';
import { render, screen } from '@testing-library/react';
import RestaurantList from '../components/RestaurantList';

test('전체 음식점 리스트를 렌더링 했는지 검사한다', () => {
  const restaurants = ["우육면가", "찐친", "춘리 마라탕", "용용선생", "마담밍", "명정루", "반포식스", "포메인", "딘타이펑", "커피베네", "스타벅스 선릉역점", "컴포즈커피 선릉역점", "더휴 런치 뷔페", "영동칼국수", "덮밥이맛있는집", "시골밥상머리", "김돈이", "정식당", "마초갈비", "스노우폭스 선릉역점", "은행골 선릉점", "돈카레", "헤키", "카와카츠", "정돈", "파스타에 반하다", "파스타 어때", "베어스타코 본점", "파스타입니다", "파스토보이", "라이브볼"];
  render(<RestaurantList />);
  restaurants.forEach((restaurant) => {
    const linkElement = screen.getByText(restaurant);
    expect(linkElement).toBeInTheDocument();
  });
});