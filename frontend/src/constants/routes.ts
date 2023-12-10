type RouteType = {
  path: string;
  exact?: boolean;
};

/**
 * Routes for the application. Routes.home looks like:
 *
 * ```typescript
 * type RouteType = {
 *   path: string
 *   exact?: boolean
 * }
 * ```
 */
const ROUTES = {
  home: { exact: true, path: "/" } as RouteType,
  collections: { path: "/collections" } as RouteType,
  collection: { path: "/collections/:id" } as RouteType,
  artwork: { path: "/collections/:id/:artworkId" } as RouteType,
  swatch: { path: "/swatch" } as RouteType,
};

export type { RouteType };
export { ROUTES };
