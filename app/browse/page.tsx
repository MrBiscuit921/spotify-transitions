import type { Metadata } from "next"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import AdvancedSearch from "@/components/search/advanced-search"
import TransitionsList from "@/components/transitions-list"

export const metadata: Metadata = {
  title: "Browse Spotify Transitions | Find Perfect Song Transitions",
  description:
    "Browse and discover seamless Spotify transitions between songs. Find the perfect transitions for your playlists and enhance your music listening experience.",
  keywords: [
    "spotify transitions",
    "browse transitions",
    "song transitions",
    "music transitions",
    "spotify playlist transitions",
  ],
}

export default function BrowsePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Browse Spotify Transitions",
            description: "Browse and discover seamless Spotify transitions between songs",
            url: "https://transitionflow.vercel.app/browse",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Spotify Song Transitions",
                  description: "Discover seamless transitions between Spotify songs",
                },
              ],
            },
          }),
        }}
      />

      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Browse Spotify Transitions</h1>
            <p className="text-muted-foreground">
              Discover seamless transitions between your favorite songs on Spotify
            </p>
          </div>

          <AdvancedSearch />

          <Suspense fallback={<TransitionsListSkeleton />}>
            <TransitionsList />
          </Suspense>
        </div>
      </div>
    </>
  )
}

function TransitionsListSkeleton() {
  return (
    <div className="grid gap-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-lg border p-4">
            <div className="flex gap-4">
              <Skeleton className="h-16 w-16 rounded-md" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-16 w-16 rounded-md" />
            </div>
            <Skeleton className="h-4 w-full" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-16 rounded-full" />
              <Skeleton className="h-8 w-16 rounded-full" />
            </div>
          </div>
        ))}
    </div>
  )
}

