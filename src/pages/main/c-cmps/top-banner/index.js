import React, { memo, useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Carousel } from 'antd';

import { TopBannerWraper, TopBannerLeft, TopBannerRight, TopBannerControl } from './style';

import { getTopBannerAction } from '../../store/actionCreators';

export default memo(function TopBanner() {
  // state hooks
  const [currentIndex, setCurrentIndex] = useState(0);

  // redux hooks
  const dispatch = useDispatch();
  const { banners } = useSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqual,
  );

  // other hooks
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // other handler
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
  const bannerNext = useCallback(() => {
    bannerRef.current.next();
  }, []);
  const bannerPrev = useCallback(() => {
    bannerRef.current.prev();
  }, []);

  const bgImage = banners[currentIndex] && banners[currentIndex].imageUrl + '?imageView&blur=40x20';

  return (
    <TopBannerWraper bgImg={bgImage}>
      <div className="banner wrap-v2">
        <TopBannerLeft>
          <Carousel ref={bannerRef} autoplay effect="fade" beforeChange={bannerChange}>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img src={item.imageUrl} />
                </div>
              );
            })}
          </Carousel>
        </TopBannerLeft>
        <TopBannerRight>下载客户端</TopBannerRight>
        <TopBannerControl>
          <button className="btn btn-pre" onClick={bannerPrev} />
          <button className="btn btn-next" onClick={bannerNext} />
        </TopBannerControl>
      </div>
    </TopBannerWraper>
  );
});
