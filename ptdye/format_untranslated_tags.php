<?PHP

/*

    PHP version 8.2
    Author https://github.com/jasperalani


    Create file in same directory 'untranslated_tag.txt' and copy from logs output of untranslated tags, example lines:
        [18:16:34] [Thread-32/ERROR] [EMI/]: [EMI] Untranslated tag #ae2:all_nether_quartz
        [18:16:34] [Thread-32/ERROR] [EMI/]: [EMI] Untranslated tag #ae2:all_quartz
        [18:16:34] [Thread-32/ERROR] [EMI/]: [EMI] Untranslated tag #ae2:can_remove_color
        [18:16:34] [Thread-32/ERROR] [EMI/]: [EMI] Untranslated tag #ae2:metal_ingots

    Run 'php format_untranslated_tags.php' and file 'output.txt' will be created with formatted tags that can be pasted into a translation file (en_us.json for example)

    example formatted text:
        "tag.item.ae2.all_nether_quartz": "All Nether Quartz",
        "tag.item.ae2.all_quartz": "All Quartz",
        "tag.item.ae2.can_remove_color": "Can Remove Color",
        "tag.item.ae2.metal_ingots": "Metal Ingots",

 */



$tags = [];

$handle = fopen("untranslated_tag.txt", "r");
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        $item = 'tag.item.' . str_replace('/', '.', str_replace(':', '.', trim(substr($line, 61))));
        $exploded = explode('.', $item);
        $last = $exploded[count($exploded) -1];
        $last = str_replace('_', ' ', $last);
        $last = ucwords($last);

        $item = '"' . $item . '": "' . $last . '",' . "\n";
        $tags[] = $item;
    }

    fclose($handle);
}

file_put_contents('output.txt', implode('', $tags));