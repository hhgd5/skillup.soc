"use client";
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";

interface Event {
  id: number;
  date: string;
  title: string;
  location: string;
  time: string;
}

interface CalendarDemoProps {
  upcomingEvents?: Event[];  
}

const CalendarDemo = ({ upcomingEvents = [] }: CalendarDemoProps) => {  // Added default value
  const [date, setDate] = useState<Date | undefined>(new Date());
 
  
  const parsedEvents = (upcomingEvents || []).map(event => ({
    ...event,
    dateObj: new Date(`${event.date} 2024`)
  }));

  const selectedDateEvents = parsedEvents.filter(event =>
    date && event.dateObj.toDateString() === date.toDateString()
  );

 
  const isDateInPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  

  const getHighlightType = (date: Date) => {
    const hasEvent = parsedEvents.some(event => 
      event.dateObj.toDateString() === date.toDateString()
    );

    if (!hasEvent) return false;
    return isDateInPast(date) ? 'past' : 'highlighted';
  };

  return (
    <div className="flex flex-col md:flex-row justify-between  gap-10 ">
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-2xl border bg-white w-fit"
          modifiers={{
            highlighted: (date) => getHighlightType(date) === 'highlighted',
            past: (date) => getHighlightType(date) === 'past'
          }}
          modifiersStyles={{
            highlighted: {
              backgroundColor: '#8B5CF6',
              color: 'white'
            },
            past: {
              backgroundColor: '#E5E7EB',
              color: '#6B7280'
            }
          }}
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-white" />
          <h2 className="text-xl font-semibold text-white">
            {date ? date.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric'
            }) : 'Select a date'}
          </h2>
        </div>
        {selectedDateEvents.length > 0 ? (
          <div className="space-y-4">
            {selectedDateEvents.map(event => (
              <Card key={event.id} className="bg-white/90 backdrop-blur">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-1">
                    <p className="text-gray-600">{event.time}</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-white/90 backdrop-blur">
            <CardContent className="pt-6">
              <p className="text-gray-600">No events scheduled for this date</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CalendarDemo;