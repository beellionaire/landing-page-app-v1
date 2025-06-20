import { ReactNode } from "react";

const ContactCard = ({ text, icon }: { text: string; icon: ReactNode }) => {
  return (
    <div className="overflow-hidden bg-white rounded-xl shadow-xl">
      <div className="p-6 text-center">
        <div className="flex justify-center">{icon}</div>
        <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
