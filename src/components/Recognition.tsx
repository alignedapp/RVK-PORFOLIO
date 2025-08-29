import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Recognition() {
  return (
    <Section accent>
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl heading">
          Why Recognition Matters
        </h2>
        <div className="space-y-6 font-body text-lg md:text-xl body">
          <p>
            The Seek Star Award represents more than individual achievement—it celebrates the transformation 
            of how we think about recruitment and candidate experience. It recognises that every interaction 
            matters, every candidate deserves respect, and every organisation has the potential to become 
            an employer of choice.
          </p>
          <p>
            This recognition validates the approach that puts candidates first, measures success beyond just 
            fill rates, and proves that doing right by people isn't just morally correct—it's good business. 
            It's acknowledgement that the future of recruitment is built on advocacy, authenticity, and genuine care.
          </p>
        </div>
        <div>
          <Button asChild size="lg" className="font-body text-lg px-8 py-4 rounded-2xl">
            <Link 
              href="https://www.linkedin.com/in/rosavankuyk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}