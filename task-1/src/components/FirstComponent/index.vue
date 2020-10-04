<template>
  <div>
    <div class="header">
      <div class="logo">
        <img :src="logoImg" alt="" />
        <div class="logoTitle">{{ logoTitle }}</div>
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <img :src="imgScr" alt="" class="img" />
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  name: "FirstComponent",

  props: {
    logoImg: {
      type: String,
      default:
        "data:image/png;base64,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",
    },
    logoTitle: {
      type: String,
      default: "logo title",
    },
    title: {
      type: String,
      default: "title",
    },
    imgScr: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///+/v7+8vLzKysr8/Pzg4ODFxcXb29vT09Pj4+P4+PjBwcH6+vry8vLY2NjIyMjs7Ozo6Oia8u11AAAEdUlEQVR4nO2d65bqIAxGp/Smrb34/i971KqlEC7FGuJZ3/7dKewJBgK4/PsDAAAAAAAAAAAAAAAA4KUam5+i3m94UsUPoVoYwlA6MIShfGAIQ/nAEIbyOcBQSeNww9NZGOXBhuq8+w1fxugfDG1gmB0YBoFhdmAYBIbZgWEQGGYHhkFgmB0YBoFhdmAYBIbZyWB4qVI6mgyv4WUeH7u007lL7vFeWA3n8rUFrZqWK5KchnWvPapOTGFkNDQPOJrhk45Hw2d4Ns+oVPlRz2NhMxyawkTtv2OWAJvhSBwzfjBO2+g/5TLs7BDeSF4eDP0Y+yiX4UydFKtT4pRxa3SKTcVchtQgLYrobhq0Kj7+XIb0aX+fZtipHfH/ScPlZZG5Jq9hk2RYP96lTnFPcxnWpGF52d2eNrPGPc5lOJC5NDrl65Sv1fs16nEuw8v20sdCP+9uTh8NZVSuYVvTnKlBmjAdaqu/uH8Qm2FVWuNUJYSwOu3tLV9tcelNw5SF9yZjRaVixvpwbrZRTKnyuyKysRXOGn/QBqpK25QzptVm9598eyfqXDaPnah+GlNmwr/aGOcqYl3DvJtYzXU7jvU1bbVmVdExE+pP7Qjb6TiiOBFmOPuyD7XyC+djWYadGt2KxE5PzMpWluHtXc6KQZ/rNYK5RpThfWXnrGzp6iRcQ0ky7KbHK+iBup3rtQZD6wZJhq+9HDIsri89BBsUZPguIal0Y871K6ECRY6hXkFaimQeXQjVUHIMNwWkuVax5/q1xcC6Rozh0G+7vYmidaqzCaJ/whBjaEZJr608Y7QIHvBIMbR3/dfB55jr3/hrKCGGxMHN+vmi53rtSW+uEWLYUj1/dsY1169tetc1MgwHaw9HU3TN9Svec0huw4os6CZHcO7dcc/163O+XMNteC0JRfdk0Aby6BNfDcW9i1EquzedI4R36vAYLfy5htnwtnBRvaHo/SZxjN8Nz7UO5ltf97WnMgbqHCfhRbmHKa/hdXl2qxjzQQsaunMNr+FzUlD62W8bORD9TM4gshpe3xVg+Z7BonJlmN55mMhpWGkV4GughtacsbgvLnAa6hXga6B666I9OGsoRsPtMbCa7l2q6OVaAs6uMxpejXDdd+SPSTMP+vyGdri6+bAQui8u8BmaIbwxUdcXkg0dNRTjOf6BNiSOGirrXYxjcXQ+632ag6EPE7kMiU/h4dA1FJfhgUnTzZTRkCOEt8apYcpj+P1E6u4+j+H3E+kCdUmKxZAjkS4QrbMY8nwKC7qGYjFkSaQL9rqGw5AthORhIoMhUyJ9ksPwsDI+Brv97xtWY8mJNUwZYtixYu0qyjhd+yYwDALD7MAwCAyzA8MgMMwODIPAMDtHGxZ1JYvjDRvWajCC7SYRfhsBhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvJJM/wpEgyv9U+R8iNaAAAAAAAAAAAAAAAAAP4r/gEYCYE2Xwz6DQAAAABJRU5ErkJggg==",
    },
    desc: {
      type: String,
      default: "desc",
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  max-width: 300px;
  padding: 0 5px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #403a49;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  img {
    height: 50px;
    width: 50px;
  }
}

.img {
  padding: 20px;
}
</style>