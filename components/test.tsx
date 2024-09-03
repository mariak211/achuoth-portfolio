import React from "react";
import { FaApple } from "react-icons/fa";
import Image from "next/image";

const skills = () => {
  return (
    <div className="bg-primary text-white p-10 flex flex-col space-y-10">
      <div className="flex items-start space-x-6">
        {/* Left side: Logo and details */}
        <div className="flex-shrink-0">
          <FaApple />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Apple</h2>
          <h3 className="text-xl">Software Engineer</h3>
          <p>Jan 2024 - May 2024</p>
        </div>
      </div>

      {/* Middle: Description */}
      <p className="text-lg leading-relaxed max-w-3xl">
        To maintain our community, if we determine (in our sole discretion) that
        a founder has behaved unethically during or after YC, we will revoke
        their YC founder status. This includes access to all Y Combinator
        spaces, software, lists, and events. All founders in a company may be
        held responsible for the unethical actions of a single co-founder or a
        company employee, depending on the circumstances.
      </p>

      <div className="flex justify-end">
        <img
          src="/assets/soulscribei.svg"
          alt="Phone"
          className="h-56 w-auto"
        />
      </div>

      {/* Bottom: Technologies Stack */}
      <div>
        <h4 className="text-2xl font-bold">Technologies Stacks</h4>
        <div className="flex justify-around mt-4">
          <p>SwiftUI</p>
          <p>SwiftUI</p>
          <p>SwiftUI</p>
          <p>SwiftUI</p>
          <p>SwiftUI</p>
        </div>
      </div>
    </div>
  );
};

export default skills;
