<script>
  export let item;

  const colors = {
    "0": "border-yellow-500 bg-yellow-100",
    "1": "border-blue-500 bg-blue-100",
    "2": "border-red-500 bg-red-100",
    "3": "border-gray-600 bg-gray-300",
  };
</script>

<li class="h-8 w-8 rounded border {colors[item]}" />
