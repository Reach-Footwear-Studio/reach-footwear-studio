const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-peach-100">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Footwear Studio For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Footwear Studio is ideal wherever footwear needs realistic 3D
          visualization to accelerate design, customization, and sales without
          over-reliance on physical samples.
        </p>

        {/* Footwear brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Footwear brands and manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Sports, fashion, casual, formal, and outdoor footwear brands
              developing seasonal collections and frequent style updates.
            </li>
            <li>
              In-house design and merchandising teams needing consistent 3D
              assets for range planning, internal reviews, and go-to-market
              content.
            </li>
          </ul>
        </div>

        {/* D2C */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            D2C and e-commerce footwear retailers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Online-first shoe brands that want interactive 3D/360-degree
              product views and configurators to increase engagement and
              conversions.
            </li>
            <li>
              Retailers using 3D visualization and virtual try-on to reduce
              return rates and improve customer confidence in fit and
              appearance.
            </li>
          </ul>
        </div>

        {/* Custom footwear */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Custom and made-to-order footwear labels
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Brands offering personalized colours, materials, soles, and
              detailing where customers need to see their configuration live in
              3D.
            </li>
            <li>
              Bespoke and orthotic footwear makers who present digital
              prototypes to clients before production.
            </li>
          </ul>
        </div>

        {/* Designers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Footwear design studios and freelancers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Independent designers and studios creating concepts and
              collections for multiple brands and manufacturers.
            </li>
            <li>
              Teams using 3D prototyping to refine shapes, proportions,
              textures, and branding elements quickly.
            </li>
          </ul>
        </div>

        {/* Licensing */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Licensing, collaboration, and capsule-collection teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Brand partnerships (e.g., designer–sport brand collaborations)
              where fast visual alignment on story, colour, and detailing is
              essential.
            </li>
            <li>
              Marketing teams that need high-quality 3D visuals for launch
              campaigns, social media, and immersive advertising.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Education and training institutes
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Footwear design, fashion, and product design schools teaching
              modern 3D workflows for shoe development and visualization.
            </li>
            <li>
              Skill centres preparing students for digital roles in footwear
              design, 3D asset creation, and e-commerce content production.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
