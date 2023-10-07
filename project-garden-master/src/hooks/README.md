# hooks
would hold any custom and reusable hooks
> Note: any hooks that are not really reusable, but are coupled to a specific feature, should be placed in the same directory as that feature.

## Example
> ```
> src:
> -- hooks
>    -- useToggle
> -- components
>    -- common
>    -- NewsletterForm
>       -- hooks
>          -- useNewsletterSignup.ts
>       -- NewsletterForm.tsx
> ```