/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { motion } from "framer-motion";
import { useContext } from "react";
import { SoundContext } from "Sounds/Context";
import Button from "Components/Button";

const style = css({
  position: "fixed",
  left: 16,
  bottom: 16,
  zIndex: 2000,
});

export default () => {
  const { toggleSound, soundEnabled } = useContext(SoundContext);
  return (
    <div css={style}>
      <Button small onClick={toggleSound} wrapperStyle={{ padding: 0 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {soundEnabled ? SoundOn : SoundOff}
        </svg>
      </Button>
    </div>
  );
};

export const SoundOn = (
  <path d="M10.875,3.8671875 C11.2343768,3.63281133 11.5429675,3.59374922 11.8007812,3.75 C12.058595,3.90625078 12.1875,4.21874766 12.1875,4.6875 L12.1875,19.3125 C12.1875,19.7812523 12.058595,20.0937492 11.8007812,20.25 C11.5429675,20.4062508 11.2343768,20.3671887 10.875,20.1328125 L5.4140625,16.5 L1.5234375,16.5 C1.10156039,16.5 0.742188984,16.3359391 0.4453125,16.0078125 C0.148436016,15.6796859 0,15.2812523 0,14.8125 L0,9.1875 C0,8.71874766 0.148436016,8.32031414 0.4453125,7.9921875 C0.742188984,7.66406086 1.10156039,7.5 1.5234375,7.5 L5.4140625,7.5 L10.875,3.8671875 Z M10.5,17.859375 L10.5,6.2109375 L6.0234375,9.1875 L1.6875,9.1875 L1.6875,14.8125 L6.0234375,14.8125 L10.5,17.859375 Z M15,15.5625 C15.9843799,15.5625 16.8242153,15.2148472 17.5195312,14.5195312 C18.2148472,13.8242153 18.5625,12.9843799 18.5625,12 C18.5625,11.0156201 18.2148472,10.1757847 17.5195312,9.48046875 C16.8242153,8.78515277 15.9843799,8.4375 15,8.4375 C14.7656238,8.4375 14.5664071,8.35546957 14.4023438,8.19140625 C14.2382804,8.02734293 14.15625,7.82812617 14.15625,7.59375 C14.15625,7.35937383 14.2382804,7.16015707 14.4023438,6.99609375 C14.5664071,6.83203043 14.7656238,6.75 15,6.75 C16.4531323,6.75 17.6914011,7.26171363 18.7148438,8.28515625 C19.7382864,9.30859887 20.25,10.5468677 20.25,12 C20.25,13.4531323 19.7382864,14.6914011 18.7148438,15.7148438 C17.6914011,16.7382864 16.4531323,17.25 15,17.25 C14.7656238,17.25 14.5664071,17.1679696 14.4023438,17.0039062 C14.2382804,16.8398429 14.15625,16.6406262 14.15625,16.40625 C14.15625,16.1718738 14.2382804,15.9726571 14.4023438,15.8085938 C14.5664071,15.6445304 14.7656238,15.5625 15,15.5625 Z M15,3 C17.4843874,3 19.60546,3.87889746 21.3632812,5.63671875 C23.1211025,7.39454004 24,9.51561258 24,12 C24,14.4843874 23.1211025,16.60546 21.3632812,18.3632812 C19.60546,20.1211025 17.4843874,21 15,21 C14.7656238,21 14.5664071,20.9179696 14.4023438,20.7539062 C14.2382804,20.5898429 14.15625,20.3906262 14.15625,20.15625 C14.15625,19.9218738 14.2382804,19.7226571 14.4023438,19.5585938 C14.5664071,19.3945304 14.7656238,19.3125 15,19.3125 C17.0156351,19.3125 18.7382741,18.5976634 20.1679688,17.1679688 C21.5976634,15.7382741 22.3125,14.0156351 22.3125,12 C22.3125,9.98436492 21.5976634,8.2617259 20.1679688,6.83203125 C18.7382741,5.4023366 17.0156351,4.6875 15,4.6875 C14.7656238,4.6875 14.5664071,4.60546957 14.4023438,4.44140625 C14.2382804,4.27734293 14.15625,4.07812617 14.15625,3.84375 C14.15625,3.60937383 14.2382804,3.41015707 14.4023438,3.24609375 C14.5664071,3.08203043 14.7656238,3 15,3 Z" />
);

export const SoundOff = (
  <path d="M10.875,3.8671875 C11.2343768,3.63281133 11.5429675,3.59374922 11.8007812,3.75 C12.058595,3.90625078 12.1875,4.21874766 12.1875,4.6875 L12.1875,19.3125 C12.1875,19.7812523 12.058595,20.0937492 11.8007812,20.25 C11.5429675,20.4062508 11.2343768,20.3671887 10.875,20.1328125 L5.4140625,16.5 L1.5234375,16.5 C1.10156039,16.5 0.742188984,16.3359391 0.4453125,16.0078125 C0.148436016,15.6796859 0,15.2812523 0,14.8125 L0,9.1875 C0,8.71874766 0.148436016,8.32031414 0.4453125,7.9921875 C0.742188984,7.66406086 1.10156039,7.5 1.5234375,7.5 L5.4140625,7.5 L10.875,3.8671875 Z M10.5,17.859375 L10.5,6.2109375 L6.0234375,9.1875 L1.6875,9.1875 L1.6875,14.8125 L6.0234375,14.8125 L10.5,17.859375 Z" />
);
