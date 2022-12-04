# Changelog for pijukafe.cz Next.JS blog

Mostly for tracking of my progress than anything else, really

## pijukafe v1.3.3

- all articles button changed to older/archive articles
- makes more sense from UI perspective. if you didnt click any of the listed articles on index, you wanna see older articles without the newer ones being repeated in the list
- renamed components, modules and constants to reflect the changes

## pijukafe v1.3.2

- beginning of a month had an improper date formatting, it showed 1. 12. as 01. 12., fixed now

## pijukafe v1.3.2

- reading time with icon moved into its own component
- date when post published is also a new component with its own icon to make the UI nicer

## pijukafe v1.3.1

- slightly reworked several components to use react-icons/md
- category and reading time are no longer badges, but texts with icons

## pijukafe v1.3.0

- index shows only first 7 articles
- every article is on separate route /everything/

## pijukafe v1.2.1

- fixed an issue, where trying to use URL to get to a post would result in 404
- excerpts are now followed by "I want to know more" set as a constant

## pijukafe v1.2.0

- reading time estimation added both on blog index and blog post detail

## pijukafe v1.1.1

- every project should have its own 404 page

## pijukafe v1.1.0

- now we have filtering posts by category! (if I had read the docs first it would have taken half the time, at most)
- broader interface allowing for conditional rendering in existing components to reflect posts within category

## pijukafe v1.0.5

- posts now have tags (preparation for filtering posts by clicking a tag)

## pijukafe v1.0.4

- first coffee review, so introduced a new component to render basic coffee info (roastery name, coffee name, country etc.)

## pijukafe v1.0.3

- changed Intro component styling a bit

## pijukafe v1.0.2

- theme extended for custom colors using palette generator
- now blog has actually some colors
- rounded edges for images, because it looks nice
- some things, that should have been constants in the first place, are now constants

## pijukafe.cz v1.0.1

- favicons added
- graphql image for home page added

## pijukafe.cz v1.0.0

- initial commit
- initial content
