import React, { FC } from 'react';
import { Event } from '../types';

interface EventHorizontalCardProps {
  event: Event;
}

const EventHorizontalCard: FC<EventHorizontalCardProps> = ({
  event: { title, type, excerpt, tags },
}) => (
  <div className="grid">
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6">
      <div className="grid grid-cols-12 gap-3">
        <span className="col-span-12 md:col-span-2 font-medium sm:text-sm md:text-md lg:text-lg text-gray-700 flex items-center justify-center">
          20 marca
        </span>
        <div className="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
          <div className="mt-2">
            <h3 className="sm:text-sm md:text-md lg:text-2xl text-gray-700 font-bold hover:underline">
              {title}
            </h3>
            <span className="font-light text-gray-600">{type}</span>

            <p className="mt-2 text-gray-600 text-sm md:text-md">{excerpt}</p>
          </div>
          <div className="flex mt-4 my-auto">
            {tags.map((tag) => (
              <a
                key={tag}
                href="#test"
                className="inline-block rounded-full text-white
                            bg-blue-400 hover:bg-blue-500 duration-300
                            text-xs font-bold
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1
                            opacity-90 hover:opacity-100"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventHorizontalCard;
