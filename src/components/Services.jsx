import { memo } from 'react';
import ScrollVelocity from './ScrollVelocity';

const Services = memo(() => {
  return (
    <div className="bg-gradient-to-br from-[#0F0F12] to-[#1F1F22] min-h-[20vh] flex items-center">
      <ScrollVelocity
        texts={[
          '• Podcasts • Product Photoshoots • Model Photography • Content Creations • Green Screen Shoots',
          '• Ad Films • Product Films • Fashion • Reels & Social • OTT Promos and many more'
        ]}
        velocity={100}
        className="custom-scroll-text"
      />
    </div>
  );
});

Services.displayName = 'Services';

export default Services;