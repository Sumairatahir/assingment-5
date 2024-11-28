import Image from 'next/image'

import { Link } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      <header className="bg-[#B5A888] px-4 py-3">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <h1 className="text-white text-6xl font-serif">Purity</h1>
          <div className="flex-1 max-w-2xl mx-4">
            <input
              type="text"
              placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
              className="w-full px-4 py-2 rounded-md"
            />
          
          </div>
          <div className="flex items-center gap-4 text-white">
            <span>♥</span>
            <span>👤</span>
            <span>🛒</span>
          </div>
        </div>
      </header>

      
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">
              IMPECCABLE
              <br />
              CRAFTSMANSHIP AND
              <br />
              FINESSE
            </h2>
            <p className="text-lg text-[#8B8B8B]">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button className="bg-[#B5A888] hover:bg-[#9a8f71] text-white px-8 py-3">
              Explore Now
            </button>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="/image/jwellery-model.png"
                alt="Model wearing elegant jewelry"
                className="object-cover rounded-tr-[100px] rounded-bl-[100px]"
              

                fill
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}