import { Transition } from '@headlessui/react';

const SlideFromRight = ({ isOpen, children }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-300 transform"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in duration-200 transform"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      {children}
    </Transition>
  );
};

export default SlideFromRight;
