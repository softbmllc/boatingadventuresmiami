export default function GallerySection() {
    return (
        <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Momentos en el Agua</h2>
  
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Atardecer en bote"
            className="rounded-xl object-cover w-full h-64 shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1571607388263-6b99f0bb0b5f"
            alt="Deportes acuáticos"
            className="rounded-xl object-cover w-full h-64 shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1524492412937-4961f1243c26"
            alt="Amigos en el sandbar"
            className="rounded-xl object-cover w-full h-64 shadow-md"
          />
        </div>
      </section>
    );
  }
  