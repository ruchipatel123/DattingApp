import { Transition } from '@headlessui/react';

const SlideFromRight = ({ isOpen, children }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-500 md:transform"
      enterFrom="md:translate-x-full"
      enterTo="md:translate-x-0"
      leave="transition ease-in duration-300 md:transform"
      leaveFrom="md:translate-x-0"
      leaveTo="md:translate-x-full"
    >
      {children}
    </Transition>
  );
};

export default SlideFromRight;
