<template>
  <div class="grid grid-cols-11 justify-center w-full h-full items-center mb-5 letter:mb-0">

    <Section title="summary" class="col-span-11 order-0">
      <Summary />
    </Section>

    <Section title="projects"
      class="col-span-11 medium:col-span-6 order-2 medium:order-1 h-full print:col-span-6 print:order-1">
      <Projects />
    </Section>

    <Section title="skills"
      class="col-span-11 medium:col-span-5 order-1 medium:order-2 h-full print:col-span-5 print:order-2">
      <Skills />
    </Section>

    <Section title="work experience" class="col-span-11 medium:col-span-6 order-3 h-full print:col-span-6">
      <Work />
    </Section>

    <Section title="education" class="col-span-11 medium:col-span-5 order-4 h-full print:col-span-5">
      <Education />
    </Section>

  </div>
</template>