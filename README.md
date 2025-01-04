# Next.js 15 RSC Unexpected Behavior

This repository demonstrates an unexpected behavior encountered when using React Server Components (RSC) in Next.js 15's App Router.  The issue involves the seemingly inconsistent behavior of RSC in a simple 'Hello World' application.

## Problem

A basic `Hello World` app, when implemented with RSC, sometimes does not render correctly.  Further investigation might reveal unexpected behavior related to data fetching or component hydration within the RSC context. The solution may involve carefully reviewing the data fetching mechanisms and ensuring they interact correctly with the RSC lifecycle. 

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the unexpected behavior in the browser.

## Solution
The solution might involve refining data fetching within the RSC, perhaps moving it to a `useEffect` hook within a Client Component or using a different strategy for data management in the RSC environment.